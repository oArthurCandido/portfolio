export const CopyToClipboard = (text: string) => {
    if(!navigator.clipboard) {
        return;
    }
   return navigator.clipboard.writeText(text).catch(err => {
        console.error('Failed to copy: ', err);
    });
    }
