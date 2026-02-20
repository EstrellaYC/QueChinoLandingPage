import { useState } from 'react';

const BuyButton = () => {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    
    try {
      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al crear la sesión de pago');
      }

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No se recibió la URL de pago');
      }
      
    } catch (error) {
      console.error('Error de compra:', error);
      alert('Error al iniciar el pago. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePurchase}
      disabled={loading}
      className="w-full py-4 px-8 bg-[#8B5E3C] hover:bg-[#6D4C41] disabled:bg-[#D7CCC8] 
                 text-white font-bold text-lg rounded-xl transition-all duration-300 
                 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg 
                 hover:shadow-xl disabled:cursor-not-allowed flex items-center 
                 justify-center gap-2"
    >
      {loading ? (
        <>
          <span className="animate-spin">⏳</span>
          <span>Procesando...</span>
        </>
      ) : (
        <>
          <span>🛒</span>
          <span>Comprar Ahora - MXN $3000</span>
        </>
      )}
    </button>
  );
};

export default BuyButton;