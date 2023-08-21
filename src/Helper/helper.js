// helper.js

// date format
export function dateFrmt (originalDate){

    let formattedDate = new Date(originalDate);

    let options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    let formatted = new Intl.DateTimeFormat('en-US', options).format(formattedDate);

    return formatted;
}

