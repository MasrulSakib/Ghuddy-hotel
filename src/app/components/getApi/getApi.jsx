export const getApi = async () => {
    const res = await fetch('https://ghuddy.link/api/v1/open/get/rental-property/es-deals-hotels?checkinDate=2025-02-02&checkoutDate=2025-02-04&requestId=123');
    const data = await res.json();
    return data;
}