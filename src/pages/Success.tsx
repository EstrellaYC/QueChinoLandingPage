import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

const Success = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [courseLink, setCourseLink] = useState<string | null>(null);
  const [customerEmail, setCustomerEmail] = useState<string | null>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      const sessionId = searchParams.get('session_id');

      if (!sessionId) {
        setStatus('error');
        return;
      }

      try {
        const response = await fetch(
          `/.netlify/functions/verify-payment?session_id=${sessionId}`
        );
        const data = await response.json();

        if (data.success) {
          setCourseLink(data.link);
          setCustomerEmail(data.customerEmail);
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error de verificación:', error);
        setStatus('error');
      }
    };

    verifyPayment();
  }, [searchParams]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">⏳</div>
          <h2 className="text-2xl font-bold text-[#5D4037]">Verificando tu pago...</h2>
          <p className="text-[#8D6E63]">Por favor, espera un momento</p>
        </div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-[#FFF8F0] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center border-2 border-red-100">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-[#5D4037] mb-4">Error de Verificación</h2>
          <p className="text-[#8D6E63] mb-6">
            No pudimos confirmar tu pago. Si ya realizaste el pago, 
            por favor contacta a nuestro soporte.
          </p>
          <Link 
            to="/" 
            className="inline-block py-3 px-6 bg-[#8B5E3C] text-white rounded-xl font-semibold hover:bg-[#6D4C41] transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] to-[#FFEFEA] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 成功提示 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-5xl mb-4">
            🎉
          </div>
          <h1 className="text-4xl font-bold text-[#5D4037] mb-2">
            ¡Pago Exitoso!
          </h1>
          <p className="text-[#8D6E63] text-lg">
            Gracias por tu compra. Tu acceso al curso está listo.
          </p>
        </div>

        {/* 主卡片 */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#E8D5C4] mb-6">
          <div className="bg-[#8B5E3C] p-6 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Acceso al Curso</h2>
            <p className="opacity-90">Google Drive - Acceso permanente</p>
          </div>

          <div className="p-8 space-y-6">
            {customerEmail && (
              <div className="bg-[#E8F5E9] border border-green-200 rounded-xl p-4 text-center">
                <p className="text-[#2E7D32]">
                  📧 La factura ha sido enviada a: <strong>{customerEmail}</strong>
                </p>
              </div>
            )}

            <div className="text-center">
              <p className="text-[#5D4037] mb-4">
                Haz clic en el botón de abajo para acceder a tu curso:
              </p>
              
              <a
                href={courseLink!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 py-4 px-8 bg-[#4285F4] hover:bg-[#3367D6] 
                         text-white font-bold text-lg rounded-xl transition-all duration-300 
                         transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <span>📁</span>
                <span>Abrir Google Drive</span>
                <span>→</span>
              </a>
            </div>

            <div className="border-t border-[#E8D5C4] pt-6">
              <h3 className="font-bold text-[#5D4037] mb-3 flex items-center gap-2">
                <span>🎁</span> Tu Actualización Gratuita
              </h3>
              <div className="bg-[#FFF3E0] border-l-4 border-[#FF9800] p-4 rounded-r-xl">
                <p className="text-[#5D4037] text-sm leading-relaxed">
                  <strong>¡Buenas noticias!</strong> Estamos trabajando en una nueva versión 
                  del curso basada en el <strong>HSK 3.0</strong>. Una vez completada, 
                  <strong> recibirás la actualización automáticamente sin costo adicional</strong>. 
                  Te notificaremos por correo cuando esté lista.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-4 text-sm text-[#6D4C41] space-y-2">
              <p className="flex items-start gap-2">
                <span>💾</span>
                <span>Te recomendamos descargar los videos para acceso offline</span>
              </p>
              <p className="flex items-start gap-2">
                <span>📱</span>
                <span>Puedes acceder desde cualquier dispositivo</span>
              </p>
              <p className="flex items-start gap-2">
                <span>⏰</span>
                <span>El enlace no expira - acceso de por vida</span>
              </p>
            </div>
          </div>
        </div>

        {/* 返回按钮 */}
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#8B5E3C] hover:text-[#6D4C41] font-semibold transition-colors"
          >
            <span>←</span>
            <span>Volver a la página principal</span>
          </Link>
        </div>

        {/* 支持信息 */}
        <div className="mt-8 text-center text-sm text-[#8D6E63]">
          <p>¿Necesitas ayuda? Contáctanos en soporte@quechino.com</p>
        </div>
      </div>
    </div>
  );
};

export default Success;