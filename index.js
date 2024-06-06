const fs = require('fs');
const { Client, GatewayIntentBits, REST, Routes   } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageAttachment } = require('discord.js');
const { clientId, guildId, allowedGuildId, token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

// Function to read guild data


const guildData = JSON.parse(fs.readFileSync('guildData.json'));
const guildData1 = JSON.parse(fs.readFileSync('guildData1.json'));
const guildData2 = JSON.parse(fs.readFileSync('guildData2.json'));
const guildData3 = JSON.parse(fs.readFileSync('guildData3.json'));

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity('Milestone/value', { type: 'WATCHING' });
});
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return; 
 const { commandName, user } = interaction;
      
    switch(commandName){
        case 'value':
        // Defer the reply because this might take longer than 3 seconds
       if (interaction.guildId !== guildId) {
      await interaction.reply({
        content: 'This command can only be used in the allowed server.',
        ephemeral: true
      });
      return;
    }

        await interaction.deferReply();
        let aggregatedData = '';

     for (const guildId of Object.keys(guildData)) {
  try {
    const guild = await client.guilds.fetch(guildId);
    const members = await guild.members.fetch();
    const humanMembers = members.filter(member => !member.user.bot);
    const totalHumans = humanMembers.size;

    // Retrieve the data for this guild
    const data = guildData[guildId];
    const multipliedValue = totalHumans * data.multiplier;
    const growth = multipliedValue - data.yesterdayValue;
    const growthPercentage = (growth / data.yesterdayValue) * 100;

    // Determine if the percentage is positive or negative
    const isGrowthPositive = growthPercentage >= 0;

    // Calculate the amount change based on the growth percentage
    const amountChange = data.specificAmount * (Math.abs(growthPercentage) / 100);

    // Adjust specificAmount by the calculated amount change
    data.specificAmount = isGrowthPositive
      ? data.specificAmount + amountChange // If growth is positive, add the amount change
      : data.specificAmount - amountChange; // If growth is negative, subtract the amount change

    // Update yesterdayValue to the new multipliedValue
    data.yesterdayValue = multipliedValue;

    // Aggregate the data to send in the reply
    aggregatedData += `Guild: ${guild.name}
` +
      `Total human members: ${totalHumans}
` +
      `Stock Amount: ${data.specificAmount.toFixed(2)}
` +
      `Amount Changed: ${isGrowthPositive ? '+' : '-'}${amountChange.toFixed(2)}
` + // Show whether the amount has increased or decreased
      `Volume: ${multipliedValue.toFixed(2)}
` +
      `Growth in Numbers: ${growth.toFixed(2)}
` +
      `Percentage Growth or Loss: ${growthPercentage.toFixed(2)}%

`;
  } catch (error) {
    console.error(`Error processing guild with ID ${guildId}:`, error);
    aggregatedData += `Error processing guild with ID ${guildId}.
`;
  }
}
// Send the aggregated data as the interaction reply
await interaction.editReply({ content: aggregatedData });

// Save the updated guildData back to the JSON file
fs.writeFileSync('guildData.json', JSON.stringify(guildData, null, 2), 'utf-8');
          break;




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








    case 'value1':
      
        // Defer the reply because this might take longer than 3 seconds
       if (interaction.guildId !== guildId) {
      await interaction.reply({
        content: 'This command can only be used in the allowed server.',
        ephemeral: true
      });
      return;
    }

        await interaction.deferReply();
        let aggregatedData1 = '';

      for (const guildId of Object.keys(guildData1)) {
  try {
    const guild = await client.guilds.fetch(guildId);
    const members = await guild.members.fetch();
    const humanMembers = members.filter(member => !member.user.bot);
    const totalHumans = humanMembers.size;

    // Retrieve the data for this guild
    const data = guildData1[guildId];
    const multipliedValue = totalHumans * data.multiplier;
    const growth = multipliedValue - data.yesterdayValue;
    const growthPercentage = (growth / data.yesterdayValue) * 100;

    // Determine if the percentage is positive or negative
    const isGrowthPositive = growthPercentage >= 0;

    // Calculate the amount change based on the growth percentage
    const amountChange = data.specificAmount * (Math.abs(growthPercentage) / 100);

    // Adjust specificAmount by the calculated amount change
    data.specificAmount = isGrowthPositive
      ? data.specificAmount + amountChange // If growth is positive, add the amount change
      : data.specificAmount - amountChange; // If growth is negative, subtract the amount change

    // Update yesterdayValue to the new multipliedValue
    data.yesterdayValue = multipliedValue;

    // Aggregate the data to send in the reply
    aggregatedData1 += `Guild: ${guild.name}
` +
      `Total human members: ${totalHumans}
` +
      `Stock Amount: ${data.specificAmount.toFixed(2)}
` +
      `Amount Changed: ${isGrowthPositive ? '+' : '-'}${amountChange.toFixed(2)}
` + // Show whether the amount has increased or decreased
      `Volume: ${multipliedValue.toFixed(2)}
` +
      `Growth in Numbers: ${growth.toFixed(2)}
` +
      `Percentage Growth or Loss: ${growthPercentage.toFixed(2)}%

`;
  } catch (error) {
    console.error(`Error processing guild with ID ${guildId}:`, error);
    aggregatedData1 += `Error processing guild with ID ${guildId}.
`;
  }
}
// Send the aggregated data as the interaction reply
await interaction.editReply({ content: aggregatedData1 });

// Save the updated guildData back to the JSON file
fs.writeFileSync('guildData1.json', JSON.stringify(guildData1, null, 2), 'utf-8');
     break;
         
            
 /////////////  //////////////////////////////////////////////////         ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
             case 'value2':
      
        // Defer the reply because this might take longer than 3 seconds
       if (interaction.guildId !== guildId) {
      await interaction.reply({
        content: 'This command can only be used in the allowed server.',
        ephemeral: true
      });
      return;
    }

        await interaction.deferReply();
        let aggregatedData2 = '';

     for (const guildId of Object.keys(guildData2)) {
  try {
    const guild = await client.guilds.fetch(guildId);
    const members = await guild.members.fetch();
    const humanMembers = members.filter(member => !member.user.bot);
    const totalHumans = humanMembers.size;

    // Retrieve the data for this guild
    const data = guildData2[guildId];
    const multipliedValue = totalHumans * data.multiplier;
    const growth = multipliedValue - data.yesterdayValue;
    const growthPercentage = (growth / data.yesterdayValue) * 100;

    // Determine if the percentage is positive or negative
    const isGrowthPositive = growthPercentage >= 0;

    // Calculate the amount change based on the growth percentage
    const amountChange = data.specificAmount * (Math.abs(growthPercentage) / 100);

    // Adjust specificAmount by the calculated amount change
    data.specificAmount = isGrowthPositive
      ? data.specificAmount + amountChange // If growth is positive, add the amount change
      : data.specificAmount - amountChange; // If growth is negative, subtract the amount change

    // Update yesterdayValue to the new multipliedValue
    data.yesterdayValue = multipliedValue;

    // Aggregate the data to send in the reply
    aggregatedData2 += `Guild: ${guild.name}
` +
      `Total human members: ${totalHumans}
` +
      `Stock Amount: ${data.specificAmount.toFixed(2)}
` +
      `Amount Changed: ${isGrowthPositive ? '+' : '-'}${amountChange.toFixed(2)}
` + // Show whether the amount has increased or decreased
      `Volume: ${multipliedValue.toFixed(2)}
` +
      `Growth in Numbers: ${growth.toFixed(2)}
` +
      `Percentage Growth or Loss: ${growthPercentage.toFixed(2)}%

`;
  } catch (error) {
    console.error(`Error processing guild with ID ${guildId}:`, error);
    aggregatedData2 += `Error processing guild with ID ${guildId}.
`;
  }
}
// Send the aggregated data as the interaction reply
await interaction.editReply({ content: aggregatedData2 });

// Save the updated guildData back to the JSON file
fs.writeFileSync('guildData2.json', JSON.stringify(guildData2, null, 2), 'utf-8');
     break;
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////          
              case 'value3':
      
        // Defer the reply because this might take longer than 3 seconds
       if (interaction.guildId !== guildId) {
      await interaction.reply({
        content: 'This command can only be used in the allowed server.',
        ephemeral: true
      });
      return;
    }

        await interaction.deferReply();
        let aggregatedData3 = '';

 for (const guildId of Object.keys(guildData3)) {
  try {
    const guild = await client.guilds.fetch(guildId);
    const members = await guild.members.fetch();
    const humanMembers = members.filter(member => !member.user.bot);
    const totalHumans = humanMembers.size;

    // Retrieve the data for this guild
    const data = guildData3[guildId];
    const multipliedValue = totalHumans * data.multiplier;
    const growth = multipliedValue - data.yesterdayValue;
    const growthPercentage = (growth / data.yesterdayValue) * 100;

    // Determine if the percentage is positive or negative
    const isGrowthPositive = growthPercentage >= 0;

    // Calculate the amount change based on the growth percentage
    const amountChange = data.specificAmount * (Math.abs(growthPercentage) / 100);

    // Adjust specificAmount by the calculated amount change
    data.specificAmount = isGrowthPositive
      ? data.specificAmount + amountChange // If growth is positive, add the amount change
      : data.specificAmount - amountChange; // If growth is negative, subtract the amount change

    // Update yesterdayValue to the new multipliedValue
    data.yesterdayValue = multipliedValue;

    // Aggregate the data to send in the reply
    aggregatedData3 += `Guild: ${guild.name}
` +
      `Total human members: ${totalHumans}
` +
      `Stock Amount: ${data.specificAmount.toFixed(2)}
` +
      `Amount Changed: ${isGrowthPositive ? '+' : '-'}${amountChange.toFixed(2)}
` + // Show whether the amount has increased or decreased
      `Volume: ${multipliedValue.toFixed(2)}
` +
      `Growth in Numbers: ${growth.toFixed(2)}
` +
      `Percentage Growth or Loss: ${growthPercentage.toFixed(2)}%

`;
  } catch (error) {
    console.error(`Error processing guild with ID ${guildId}:`, error);
    aggregatedData3 += `Error processing guild with ID ${guildId}.
`;
  }
}
// Send the aggregated data as the interaction reply
await interaction.editReply({ content: aggregatedData3 });

// Save the updated guildData back to the JSON file
fs.writeFileSync('guildData3.json', JSON.stringify(guildData3, null, 2), 'utf-8');
     break;
            
            
}
    });
              


const commands =  [ 
    new SlashCommandBuilder().setName('value').setDescription('Get the calculated values for the guild').toJSON(),
    new SlashCommandBuilder().setName('value1').setDescription('Get the calculated values for the guild').toJSON(),
    new SlashCommandBuilder().setName('value2').setDescription('Get the calculated values for the guild').toJSON(),
    new SlashCommandBuilder().setName('value3').setDescription('Get the calculated values for the guild').toJSON()
// Register the command for a specific guild
];
const rest = new REST({ version: '9' }).setToken(process.env.token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error('Error while refreshing application (/) commands:', error);
  }
})();



 

client.login(process.env.token); // Replace with your bot token