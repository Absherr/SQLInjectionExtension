chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a cfasd ads fas dfontent script:" + sender.tab.url :
                "from the exdsa fasd fasd fasdtension got teh msg: "+request.msg);
      if (request.msg == "get_url")
      {
          sendResponse({ans:window.location.href})
      }
          });
      /*
      if (request.msg == "get_inputs")

	{
		var test = document.getElementsByTagName("input").length;
		if(test==0)
		{
			sendResponse({ans: 0});
			return;
		}	
		var inputs = document.getElementsByTagName("input");
		var list = [];
		for(i=0;i<inputs.length;i++){
			list[i] = {name:inputs[i].getAttribute("name"),value:inputs[i].value}
		}
        sendResponse({ans: list});
	}
    else if (request.msg == "get_inputs_names")
	{
		var inputs = document.getElementsByTagName("input");
		var list = [];
		for(i=0;i<inputs.length;i++){
			list[i] = inputs[i].getAttribute("name");
		}
        sendResponse({ans: list});
	}
    else if (request.msg == "get_amount_of_inputs")
    {
        var amount = document.getElementsByTagName("input").length;

        sendResponse({ans: amount});
    }
    else if (request.msg === "get_url")
      {
          alert("biore urla");
          sendResponse({ans: window.location});
      }
    else if (request.msg == "inject_file")
	{
		var s = document.createElement('script');
		s.src = chrome.extension.getURL(request.file_name);
		//s.onload = function() { // after execution of the script we can remove it from page
		//		this.parentNode.removeChild(this);
		//	};
		s.onload=sendResponse({ans:"gotowe"});
		(document.head||document.documentElement).appendChild(s);
	}
	else if (request.msg == "inject_code")
	{
	console.log("zaczynam wrzucac");
		var s = document.createElement('script');
		s.textContent = request.code;
		(document.head||document.documentElement).appendChild(s);
	}
  });
       */
  
  