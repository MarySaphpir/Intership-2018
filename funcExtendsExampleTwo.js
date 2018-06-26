function TV() {
    this.channelHD = {
        id: 1,
        name: '1 + 1'
    };
    this.channelFullHD = {
        id: 2,
        name: '2 + 2'
    };
}

function SmartTV() {
    TV.apply(this, arguments);
    const control = new Controller();

    this.channelControll = () => {
        return (control.stateControll() === 'full hd') ? this.channelFullHD : this.channelHD;
    }
}

function Controller(state) {
    this.state = false;
    const defaulQuality = 'hd';
    const goodQuality = 'full hd';

    this.stateControll = () => {
        return (state === 'on') ? goodQuality : defaulQuality;
    }
}

const smartTV = new SmartTV('on');
console.log(smartTV.channelControll());

