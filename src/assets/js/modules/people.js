class MoreArray extends Array {

    checkAlike() {
        this.reduce(
            (acc, element) => {
                if (acc === element) console.log(false)
                return element
            }
        );
    }

}

export default MoreArray;