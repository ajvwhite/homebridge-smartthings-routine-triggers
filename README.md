# homebridge-smartthings-routine-triggers

This is a little plugin to trigger SmartThings routines from [Homebridge](https://github.com/nfarina/homebridge).

It is a modified version of [arcreative's homebridge-smartthings-routine](https://github.com/arcreative/homebridge-smartthings-routine)
to work even after recent API Changes.

## Installation

1. `npm install -g ajvwhite/homebridge-smartthings-routine-triggers`
2. Install the [homebridge-routine-triggers.groovy](smartapps/ajvwhite/homebridge-routine-triggers.src/homebridge-routine-triggers.groovy) 
SmartApp in the API portal:  
    
    **European API Portal:** [SmartThings EU API Portal](https://graph-eu01-euwest1.api.smartthings.com/)  
    **US API Portal:** [SmartThings Main API Portal](https://graph.api.smartthings.com/)  
    
    \(**NOTE:** If outside of Europe, replace instances of `graph-eu01-euwest1.api.smartthings.com` with `graph.api.smartthings.com` in [homebridge-routine-triggers.groovy](smartapps/ajvwhite/homebridge-routine-triggers.src/homebridge-routine-triggers.groovy) before adding.\)
    
3. Ensure when adding, to enable OAuth in the SmartApp configuration
4. Save and Publish the app for your own account
5. In the SmartThings app on your mobile device add the SmartApp by going to
   Marketplace > SmartApps > My Apps and selecting "Homebridge Routine Triggers"
6. You will need to fetch the accesory config to place in your homebridge config
  from the newly installed SmartApp and place it in your homebridge `config.json`
  file
7. Restart `homebridge` for it to pick up the routine triggers
8. **NOTE:** If you add, modify or remove any routine you will need to update the config
  as per 6

## Usage

Just say "Turn \[on/off\] \[routine name\]" to trigger the routine. There is actually no "off" state to a routine and 
so will have no effect other than update it's status with HomeKit.

## Contributors

* [ajvwhite](https://github.com/ajvwhite)

## Derivative Credits

The initial work of this repository was made possible due to the following work:

* Thanks to [jnewland](https://github.com/jnewland) for the original [HelloHomeBridge.groovy](https://github.com/jnewland/homebridge/blob/smartthings/accessories/HelloHomeBridge.groovy) 
file that [homebridge-routine-triggers.groovy](smartapps/ajvwhite/homebridge-routine-triggers.src/homebridge-routine-triggers.groovy) is based on.

* Thank you to [arcreative](https://github.com/arcreative) for the original [homebridge-smartthings-routine](https://github.com/arcreative/homebridge-smartthings-routine) 
that this project is created from.
