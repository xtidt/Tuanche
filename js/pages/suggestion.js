$(function() {
	function pageInit() {
		BindEvent();
	};

	function BindEvent() {
		$('#submitBtn').on('click', function() {
			if ($('#suggestion').val().trim() == '') {
				alert('请输入内容');
				return false;
			}

			if ($('#qq').val().trim() == '') {
				alert('请输入QQ号码');
				return false;
			}

			var postData = {
				note : $('#suggestion').val(),
				qq   : $('#qq').val(),
				source: 1
			}

			$.ajax({
				type: 'get',
				url: ApiUrl + 'Suggestion/Add',
				data: postData,
				success: function(data) {
					if (data.Code == 1) {
						alert('提交成功');
					}
				},
				error: function(xhr) {
					$.errorEvent();
				}
			})
		});
	}

	pageInit();
})