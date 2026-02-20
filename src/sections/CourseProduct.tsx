import BuyButton from '../components/BuyButton';

const CourseProduct = () => {
  return (
    <section id="curso" className="py-20 px-4 bg-gradient-to-b from-[#FFF8F0] to-[#FFEFEA]">
      <div className="max-w-6xl mx-auto">
        {/* 标题区 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#8B5E3C] text-white text-sm font-medium rounded-full mb-4">
            Oferta Especial de Lanzamiento
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-4">
            Curso Básico de Chino Mandarín
          </h2>
          <p className="text-xl text-[#8D6E63] max-w-2xl mx-auto">
            Inicia tu viaje en el chino mandarín a tu ritmo con nuestro curso pregrabado, diseñado para principiantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧：课程卡片 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#E8D5C4]">
            <div className="p-6 text-white" style={{background: 'linear-gradient(315deg, #834b41, #ebcd8e, #834b41, #503733)'}}>
              <h3 className="text-2xl font-bold mb-2">Curso Pregrabado</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">$3000</span>
                <span className="text-lg opacity-80">MXN</span>
                <span className="opacity-60 ml-2">≈ USD$175</span>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📹</span>
                <span className="text-[#5D4037]">40 horas de video HD</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <span className="text-[#5D4037]">Material descargable incluido</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span className="text-[#5D4037]">Acceso permanente a Google Drive</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <span className="text-[#5D4037] font-semibold text-[#8B5E3C]">
                  Actualización gratuita al nuevo HSK 3.0
                </span>
              </div>
            </div>

            <div className="p-6 pt-0">
              <BuyButton />
            </div>
          </div>

          {/* 右侧：重要说明 */}
          <div className="space-y-6">
            <div className="bg-[#FFF3E0] border-l-4 border-[#FF9800] p-6 rounded-r-xl">
              <h4 className="font-bold text-[#E65100] mb-3 flex items-center gap-2">
                <span>⚠️</span> Información Importante
              </h4>
              <p className="text-[#5D4037] leading-relaxed">
                Actualmente estamos desarrollando una nueva versión del curso 
                <strong> basada en el nuevo programa de estudios HSK 3.0</strong>. 
                El curso que se vende ahora se basa en la versión anterior del HSK, 
                pero <strong>una vez completada la nueva versión, podrás actualizar 
                gratuitamente sin costo adicional</strong>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-[#E8D5C4]">
              <h4 className="font-bold text-[#5D4037] mb-4">¿Qué incluye?</h4>
              <ul className="space-y-3 text-[#6D4C41]">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5E3C] font-bold">✓</span>
                  <span>Lecciones estructuradas desde nivel principiante</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5E3C] font-bold">✓</span>
                  <span>Ejercicios prácticos de pronunciación</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B5E3C] font-bold">✓</span>
                  <span>Vocabulario esencial para la vida diaria</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-[#8D6E63] bg-white/50 p-4 rounded-xl md:col-span-2">
            <span>🔒</span>
            <span>Pago seguro procesado por Stripe. Acceso inmediato tras la compra.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseProduct;