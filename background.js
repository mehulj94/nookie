browser.browserAction.onClicked.addListener(async (tab) => {
    try {
        if (!tab) {
            console.error('No active tab found');
            return;
        }

        const url = new URL(tab.url);
        
        // Get cookies for the current domain
        const cookies = await browser.cookies.getAll({
            url: tab.url
        });
        
        console.log('Found cookies:', cookies);
        
        // Clear cookies
        let cookieCount = 0;
        for (const cookie of cookies) {
            // Create proper URL for cookie removal
            const cookieUrl = `${url.protocol}//${cookie.domain}${cookie.path}`;
            
            await browser.cookies.remove({
                name: cookie.name,
                url: cookieUrl
            });
            
            cookieCount++;
        }

        console.log(`Successfully removed ${cookieCount} cookies`);

        // Clear localStorage
        const clearStorageScript = `
            const storageSize = localStorage.length;
            localStorage.clear();
            console.log('Cleared localStorage items:', storageSize);
        `;

        await browser.tabs.executeScript(tab.id, {
            code: clearStorageScript
        });
        
        // Reload the page
        await browser.tabs.reload(tab.id);
        
    } catch (error) {
        console.error('Error:', error);
    }
});
