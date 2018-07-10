using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MagicPaste.WebClient
{
    public class MagicPasteHub : Hub
    {
        public async void SendData(string data)
        {
            await Clients.All.SendAsync("ReceiveData", data);
        }
    }
}
