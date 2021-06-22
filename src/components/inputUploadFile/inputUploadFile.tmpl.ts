export default `
	<label class="input-upload-file">
		<span class="input-upload-file__label">{{contentLabel}}</span>
		<input type="file" name="{{name}}" hidden onchange="chat.form.changeInputFile(this)" />
		<span class="input-upload-file__name"></span>
	</label>
`.trim();
