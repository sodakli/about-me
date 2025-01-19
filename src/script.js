document.getElementById('copyButton').addEventListener('click', function() {

    const discordInvite = 'https://discord.gg/Wgw9uG2CPJ';


    const tempInput = document.createElement('input');
    tempInput.value = discordInvite;

  
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);

    // Execute the copy command
    document.execCommand('copy');

 
    document.body.removeChild(tempInput);


    const button = document.getElementById('copyButton');
    button.textContent = 'Copied to clipboard';
    
    setTimeout(function() {
        button.textContent = 'Join Revolt';
    }, 2000);
});