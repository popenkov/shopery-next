export async function getMainPageData() {
    try {
        const response = await fetch('/api/main-page/', {
            next: {
                revalidate: 60,
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('loading error');
        }

        return response.json();
    } catch (e) {
        console.log(e);
    }
}
