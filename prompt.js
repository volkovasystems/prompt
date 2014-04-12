try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "prompt",
		[
			"argumentsToArray",
			"hardenAllProperty",
			"hardenProperty"
		],
		function construct( ){
			var prompt = function prompt( ){

			};

			prompt.configure = function promptConfigure( ){

			};
			
			base.prompt = prompt;
		} );
} )( base );