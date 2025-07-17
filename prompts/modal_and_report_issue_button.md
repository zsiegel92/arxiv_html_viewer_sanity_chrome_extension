# Modal and Report Issue Button

Read `prompts/prompt.md` to see what we're doing. Make sure the extension removes these too. Note that these only show when we highlight text - so maybe make sure they can never appear or if they do appear they are instantly removed or are already hidden via some CSS added to the document. I'm not sure what the best way is but use best-practices for this kind of thing.

## Modal

```html
<button id="small-report-button" type="button" class="btn btn-secondary btn-sm" style="background-color: rgb(179, 27, 27); position: fixed; display: inline; left: 1054.9px; top: 339.247px; transform: translate(-50%, -100%);">Report Issue for Selection</button>
```

## Report Issue Button

```html
<div class="modal" id="myForm" role="dialog" aria-labelledby="modal-title"><div class="modal-dialog"><form class="modal-content" id="myFormContent" enctype="multipart/form-data"><div class="modal-header" id="modal-header"><h5 class="modal-title">Report Github Issue</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><label for="form_title" id="modalTitle">Title:</label><input class="form-control" id="form_title" name="form_title" required="required" placeholder="Enter title"><label for="description" id="selectedTextModalDescription" style="display: none;">Content selection saved. Describe the issue below:</label><label for="description" id="nomralModalDescription">Description:</label><textarea class="form-control" id="description" name="description" required="required" style="height: 80px;" maxlength="500" placeholder="500 characters maximum"></textarea></div><div class="modal-footer d-flex justify-content-end"><button type="submit" class="sr-only button" id="modal-submit-sr">Submit without Github</button><button type="submit" class="btn btn-primary" id="modal-submit">Submit in Github</button></div></form></div></div>
```