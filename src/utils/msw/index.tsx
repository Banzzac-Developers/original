
const initMockAPI = async (): Promise<void> => {
    const { worker } = await import('./browser');
    worker.start({ onUnhandledRequest: 'bypass' }); 
}

export default initMockAPI;