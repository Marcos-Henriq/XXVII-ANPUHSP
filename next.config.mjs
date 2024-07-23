import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true, // Habilita o modo estrito do React para melhor tratamento de erros
  swcMinify: true, // Habilita a minificação SWC para melhor desempenho
  compiler: {
    removeConsole: process.env.NODE_ENV !== 'development', // Remove console.log em produção
  },
};

// Exporta a configuração combinada para Next.js com suporte PWA
export default withPWA({
  dest: 'public', // Diretório de destino para os arquivos PWA
  disable: process.env.NODE_ENV === 'development', // Desativa o PWA no modo de desenvolvimento
  register: true, // Registra o service worker do PWA
  skipWaiting: true, // Pular a espera pela ativação do service worker
})(nextConfig);
