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

			var tempQQ = $('#qq').val() || null;
			var postData = {
				note : $('#suggestion').val(),
				qq   : tempQQ,
				source: 1
			}

			$.ajax({
				type: 'get',
				url: ApiUrl + 'Suggestion/Add',
				data: postData,
				success: function(data) {
					if (data.Code == 1) {
						alert('谢谢您的反馈！');
						window.location.href = 'index.html';
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