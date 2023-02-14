wp.hooks.addFilter(
	'ep.InstantResults.Result',
	'customInstantResultsTemplate/CustomResult',
	() =>
		( { date, excerpt, thumbnail, title, type, url } ) => {
			return (
				<article
					className={ `ep-search-result ${
						thumbnail ? 'ep-search-result--has-thumbnail' : null
					}` }
				>
					{ thumbnail && (
						<a className="ep-search-result__thumbnail" href={ url }>
							<img
								width={ thumbnail.width }
								height={ thumbnail.height }
								alt={ thumbnail.alt }
							/>
						</a>
					) }
					<header className="ep-search-result__header">
						{ type ? (
							<span className="ep-search-result__type">
								{ type }
							</span>
						) : null }
						<h2 className="ep-search-result__title">
							<a
								href={ url }
								dangerouslySetInnerHTML={ { __html: title } }
							/>
						</h2>
					</header>
					{ excerpt.length > 0 ? (
						<p
							className="ep-search-result__description"
							dangerouslySetInnerHTML={ { __html: excerpt } }
						/>
					) : null }
					<footer className="ep-search-result__footer">
						{ date }
					</footer>
				</article>
			);
		}
);
