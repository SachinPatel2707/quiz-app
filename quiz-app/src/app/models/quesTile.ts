export class QuesTile {
    isCurrent: boolean
    isAnswered: boolean

    constructor(isCurrent: boolean, isAnswered:boolean) {
        this.isAnswered = isAnswered
        this.isCurrent = isCurrent
    }
}