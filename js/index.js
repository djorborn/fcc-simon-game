 
  
var vm = new Vue({
	el: '#app',
	data: {
		onOff: true,
		pattern: [],
		pad: [
			{id: 0, name: 'red', class: "glow-red", c: ""},
			{id: 1, name: 'blue', class: "glow-blue", c: ""},
			{id: 2, name: 'green', class: "glow-green", c: ""},
			{id: 3, name: 'yellow', class:"glow-yellow", c: ""}
			], 
		mem: [],
		current: null,
	},
	methods: {
		startGame: function(){
			this.playPattern();
		},
		patterns: function(){
			
		},
		playPattern: function(){
			
		},
		turnOff: function(){
			
		}
	}
});