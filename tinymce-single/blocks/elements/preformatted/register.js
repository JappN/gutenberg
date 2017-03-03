window.wp.blocks.registerBlock( {
	elements: [ 'pre' ],
	type: 'text',
	icon: 'gridicons-code',
	controls: [
		{
			icon: 'gridicons-cog'
		},
		{
			classes: 'remove-formatting',
			icon: 'gridicons-code',
			onClick: function( block, editor ) {
				editor.formatter.remove( 'pre' );
			}
		}
	]
} );
