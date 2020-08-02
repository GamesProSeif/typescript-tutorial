class Human {
	public name = '';
	public age: string | number = 17;

	incAge() {
		(this.age as number)++;
	}
}