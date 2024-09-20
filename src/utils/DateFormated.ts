// TODO: refatorar essa função
export function formatDate(dateString: Date | string, isHours: boolean = true) {
    // Converte a string de data para um objeto Date
    const date: Date | string = typeof dateString ==="string" ? new Date(dateString) : dateString;

    // Extrai os componentes da data
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Formata a data e a hora
    return isHours? `${day}/${month}/${year} ${hours}:${minutes}` : `${day}/${month}/${year}` ;
}
