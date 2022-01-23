import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare';

CMS.registerMediaLibrary(uploadcare);
document.addEventListener("DOMContentLoaded", () => {
    uploadcare.Widget('[name="file"]', {
        "publicKey": "075151893a65319cd6da",
        "tabs": "file camera url facebook gdrive gphotos"
    })
});