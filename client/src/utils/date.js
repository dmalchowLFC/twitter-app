export function formatDate(date) {
    const formattedDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    return formattedDate.toLocaleDateString("en-US", options);

}