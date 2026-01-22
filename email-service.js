// email-service.js
// Configuración para EmailJS (gratuito para 200 emails/mes)

const EMAILJS_CONFIG = {
    serviceId: 'service_ladoc',
    templateId: 'template_contacto',
    publicKey: 'tu_public_key_aqui'
};

// Inicializar EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

async function sendContactEmail(contactData) {
    try {
        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            {
                from_name: contactData.name,
                from_email: contactData.email,
                subject: contactData.subject || 'Mensaje desde Lado C',
                message: contactData.message,
                to_email: 'ladoc.opinion@gmail.com'
            }
        );
        
        return { success: true, message: 'Mensaje enviado correctamente' };
    } catch (error) {
        console.error('Error enviando email:', error);
        return { 
            success: false, 
            message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' 
        };
    }
}

// Función para manejar el formulario de contacto
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    const sendButton = document.getElementById('send-message');
    const statusDiv = document.getElementById('contact-status');
    
    if (!sendButton) return;
    
    sendButton.addEventListener('click', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        const privacyChecked = document.getElementById('privacy-checkbox').checked;
        
        // Validación
        if (!name || !email || !message) {
            showFormStatus('Por favor completa todos los campos obligatorios', 'error');
            return;
        }
        
        if (!privacyChecked) {
            showFormStatus('Debes aceptar la Política de Privacidad', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showFormStatus('Por favor ingresa un email válido', 'error');
            return;
        }
        
        // Deshabilitar botón y mostrar carga
        sendButton.disabled = true;
        sendButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        // Enviar email
        const result = await sendContactEmail({
            name,
            email,
            subject,
            message
        });
        
        // Restaurar botón
        sendButton.disabled = false;
        sendButton.textContent = 'Enviar Mensaje';
        
        // Mostrar resultado
        if (result.success) {
            showFormStatus(result.message, 'success');
            
            // Limpiar formulario
            document.getElementById('contact-name').value = '';
            document.getElementById('contact-email').value = '';
            document.getElementById('contact-subject').value = '';
            document.getElementById('contact-message').value = '';
            document.getElementById('privacy-checkbox').checked = false;
            
            // También guardar en Firestore para backup
            await saveContactMessage({ name, email, subject, message });
        } else {
            showFormStatus(result.message, 'error');
        }
    });
}

function showFormStatus(message, type) {
    const statusDiv = document.getElementById('contact-status');
    statusDiv.textContent = message;
    statusDiv.style.color = type === 'success' ? 'var(--color-success)' : 'var(--color-danger)';
    statusDiv.style.fontWeight = 'bold';
    
    setTimeout(() => {
        statusDiv.textContent = '';
    }, 5000);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

async function saveContactMessage(messageData) {
    try {
        await firestoreDb.collection('contactMessages').add({
            ...messageData,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            read: false
        });
        console.log('Mensaje guardado en base de datos');
    } catch (error) {
        console.error('Error guardando mensaje:', error);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupContactForm);
