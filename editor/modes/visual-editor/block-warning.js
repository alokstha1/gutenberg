/**
 * WordPress dependencies
 */
import { Dashicon } from '@wordpress/components';

function BlockWarning( { children } ) {
	return (
		<div className="editor-visual-editor__block-warning">
			<Dashicon icon="warning" />
			{ children }
		</div>
	);
}

export default BlockWarning;
