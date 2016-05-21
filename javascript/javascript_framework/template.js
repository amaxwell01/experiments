/* ===========================================================================
    * This is my template that I want to reproduce
    ========================================================================== */
// {{#each files}}
// <li class="droppable draggable">
//     <div class="folder_item item" data-hash="{{folder_hash}}">
//         <div class="folder_name">
//             <i class="icon icon-folder"></i>
//             {{folder_name}}
//         </div>
//         <div class="updated_at">{{folder_updated_at}}</div>
//     </div>
// </li>
// {{/each}}

module.exports = function generateTemplate(file) {
    return `
    <li class="droppable draggable">
        <div class="folder_item item" data-hash="${file.folder_hash}">
            <div class="folder_name">
                <i class="icon icon-folder"></i>
                ${file.folder_name}
            </div>
            <div class="updated_at">${file.folder_updated_at}</div>
        </div>
    </li>`;
};
