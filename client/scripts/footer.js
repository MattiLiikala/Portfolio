var SkeletonFooter = React.createClass({
	render: function(){
		return(
			<div className="skeletonFooter">
			</div>
		);
	}
});

ReactDOM.render(
		<SkeletonFooter/>,
		document.getElementById('footerPart')
);
