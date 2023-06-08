export function convertViews(numberOfViews: number) {
    const million = 1000000;
    const thounsand = 1000;
    const billion = 1000000000;
    if (numberOfViews / billion > 1) {
        return Math.floor((numberOfViews / billion)) + 'B';
    }
    else if (numberOfViews / million > 1) {
        return Math.floor((numberOfViews / million)) + 'M';
    }
    else if (numberOfViews / thounsand > 1) {
        return Math.floor((numberOfViews / thounsand)) + 'K';
    }
    else {
        return numberOfViews;
    }

}
export function convertUploadedTime(uploadedTime: number) {
    const year = 365;
    const months = 12;
    const days = 30;
    const hours = 24;
    const minits = 60;
    const seconds = 60;

    if (uploadedTime / (months * days * hours * minits * seconds) > 1) {
        return Math.floor((uploadedTime / (months * days * hours * minits * seconds))) + ' year ago'
    }
    else if (uploadedTime / (days * hours * minits * seconds)) {
        return Math.floor((uploadedTime / (days * hours * minits * seconds))) + ' months ago'
    }
    else if (uploadedTime / (hours * minits * seconds)) {
        return Math.floor((uploadedTime / (hours * minits * seconds))) + ' days ago';
    }
    else if (uploadedTime / (minits * seconds)) {
        return Math.floor((uploadedTime / (minits * seconds))) + ' hours ago';
    }
    else
        return 'just now';
}

export function convertLength(numberOfSeconds: number) {
    if (numberOfSeconds > 60) {
        return Math.floor(numberOfSeconds / 60) + ':' + ((numberOfSeconds % 60 > 9) ? numberOfSeconds % 60 : ('0' + (numberOfSeconds % 60)));
    }
    else {

        return '00:' + numberOfSeconds;
    }
}