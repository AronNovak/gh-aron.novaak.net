!function(e,t,r){t.behaviors.commentByViewer={attach:function(){var t=parseInt(r.user.uid,10);e("[data-comment-user-id]").filter(function(){return parseInt(this.getAttribute("data-comment-user-id"),10)===t}).addClass("by-viewer")}}}(jQuery,Drupal,drupalSettings);