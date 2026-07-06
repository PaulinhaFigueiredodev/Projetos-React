function TextAreaField({
	id,
	label,
	value,
	onChange,
	placeholder,
	errorMessage
}) {
	const errorId = errorMessage ? `${id}-error` : undefined;

	return (
		<div className="textarea-field">
			<label className="textarea-field__label" htmlFor={id}>
				{label}
			</label>

			<textarea
				id={id}
				placeholder={placeholder}
				className={
					errorMessage
						? "textarea-field__control textarea-field__control--error"
						: "textarea-field__control"
				}
				value={value}
				onChange={(event) => onChange(event.target.value)}
				aria-describedby={errorId}
				aria-invalid={Boolean(errorMessage)}
			></textarea>

			{errorMessage && (
				<p id={errorId} className="textarea-field__error">
					{errorMessage}
				</p>
			)}
		</div>
	)
}

export default TextAreaField;