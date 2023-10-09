export default {
    send: async (serviceID: string, templateID: string, values: any, userID: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Success!');
            }, 1000);
        });
    }
};
