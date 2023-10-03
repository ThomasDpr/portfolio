// dans un fichier par exemple mockEmailjs.ts
export default {
    send: async (serviceID: string, templateID: string, values: any, userID: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Ici, vous pouvez simuler une réussite ou une erreur
                // en appelant respectivement resolve ou reject.
                resolve('Success!'); // ou reject('Failure!');
            }, 1000); // attend pendant 1 seconde pour simuler le délai de réseau
        });
    }
};
