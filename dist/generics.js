"use strict";
const serverMembers = new Map();
serverMembers.set('123', 'Takio');
const guild = {
    members: new Map()
};
class Collection extends Map {
    first() {
        return this.values().next().value;
    }
}
class VoiceChannel {
    constructor() {
        this.members = new Collection();
    }
}
const streamChannel = new VoiceChannel();
streamChannel.members.set('1', 'Takio');
streamChannel.members.set('2', 'Rami');
streamChannel.members.first();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpY3MuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJnZW5lcmljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTSxhQUFhLEdBQXdCLElBQUksR0FBRyxFQUFFLENBQUM7QUFFckQsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFNbEMsTUFBTSxLQUFLLEdBQStCO0lBQ3pDLE9BQU8sRUFBRSxJQUFJLEdBQUcsRUFBRTtDQUNsQixDQUFBO0FBR0QsTUFBTSxVQUFpQixTQUFRLEdBQVM7SUFDaEMsS0FBSztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDO0NBQ0Q7QUFFRCxNQUFNLFlBQVk7SUFBbEI7UUFDUSxZQUFPLEdBQStCLElBQUksVUFBVSxFQUFFLENBQUM7SUFDL0QsQ0FBQztDQUFBO0FBRUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUV6QyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDeEMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRXZDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbnRyb2R1Y3Rpb25cclxuY29uc3Qgc2VydmVyTWVtYmVyczogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcclxuXHJcbnNlcnZlck1lbWJlcnMuc2V0KCcxMjMnLCAnVGFraW8nKTtcclxuXHJcbmludGVyZmFjZSBHdWlsZDxUPiB7XHJcblx0bWVtYmVyczogVFxyXG59XHJcblxyXG5jb25zdCBndWlsZDogR3VpbGQ8TWFwPHN0cmluZywgc3RyaW5nPj4gPSB7XHJcblx0bWVtYmVyczogbmV3IE1hcCgpXHJcbn1cclxuXHJcbi8vIEV4dGVuZGluZyBHZW5lcmljc1xyXG5jbGFzcyBDb2xsZWN0aW9uPEssIFY+IGV4dGVuZHMgTWFwPEssIFY+IHtcclxuXHRwdWJsaWMgZmlyc3QoKTogViB7XHJcblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBWb2ljZUNoYW5uZWwge1xyXG5cdHB1YmxpYyBtZW1iZXJzOiBDb2xsZWN0aW9uPHN0cmluZywgc3RyaW5nPiA9IG5ldyBDb2xsZWN0aW9uKCk7XHJcbn1cclxuXHJcbmNvbnN0IHN0cmVhbUNoYW5uZWwgPSBuZXcgVm9pY2VDaGFubmVsKCk7XHJcblxyXG5zdHJlYW1DaGFubmVsLm1lbWJlcnMuc2V0KCcxJywgJ1Rha2lvJyk7XHJcbnN0cmVhbUNoYW5uZWwubWVtYmVycy5zZXQoJzInLCAnUmFtaScpO1xyXG5cclxuc3RyZWFtQ2hhbm5lbC5tZW1iZXJzLmZpcnN0KCk7XHJcbiJdfQ==