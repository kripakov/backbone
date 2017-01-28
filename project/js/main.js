var Note = Backbone.Model.extend({
	defaults:{
		name: 'alex',
		job: 'frontend developer'
	},
	walk: function () {
		return 'i am walk to street'
	}
})
var NoteView = Backbone.View.extend({
	tagName: 'li',

	template: '#person-id',

	initialize: function(){
		this.render();
	},

	render: function(){
		var template = _.template($(this.template).html())
		this.$el.html(template(this.model.toJSON()))
	}
})
var note = new Note;
var noteView = new NoteView({model: note})