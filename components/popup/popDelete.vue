<template>
 <b-modal id="pop_delete" title="Confirm">
    <div id="" class="modal fade" tabindex="-1" data-backdrop="static" data-keyboard="false">
    <input type="hidden" id="txt_delete_id">
    <input type="hidden" id="txt_delete_text">
    <form id="frm_delete" class="form-horizontal">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
            <h4 class="modal-title lb_delete_title lb_delete_picker">Delete</h4>
        </div>
        <div class="modal-body ct_popup_delete editor_delete_message lb_delete_message">
            Are you sure to delete them?
        </div>
        <div class="modal-footer">
            <button type="button" data-dismiss="modal" class="btn btn-default lb_close">Close</button>
            <button id="btn_delete" type="submit" class="btn btn-danger"><i class='fa fa-trash-o'></i> <span class="lb_delete lb_delete_picker">Delete</span></button>
        </div>
    </form>
</div>
</b-modal>
</template>

<script>
export default {
    
}
</script>