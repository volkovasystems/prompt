try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "prompt",
		[
			"argumentsToArray",
			"hardenProperty"
		],
		function construct( ){
			var prompt = function prompt( ){

			};
			base.prompt = prompt;
		} );
} )( base );