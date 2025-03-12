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
        
        if (cookies.length === 0) {
            console.log('No cookies found');
            return;
        }

        let count = 0;
        for (const cookie of cookies) {
            // Create proper URL for cookie removal
            const cookieUrl = `${url.protocol}//${cookie.domain}${cookie.path}`;
            
            await browser.cookies.remove({
                name: cookie.name,
                url: cookieUrl
            });
            
            count++;
        }

        console.log(`Successfully removed ${count} cookies`);
        
        // Reload the page
        await browser.tabs.reload(tab.id);
        
    } catch (error) {
        console.error('Error:', error);
    }
});
