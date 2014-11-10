import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'file',
  imageSource: null,

  change: function() {
    var that = this,
        file = that.get('element').files[0],
        reader = new FileReader();
    reader.onloadend = function() {
      that.set('imageSource', reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
});
