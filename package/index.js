const en = require('./langs/en');
const fr = require('./langs/fr');
const sp = require('./langs/spanish');
class Filter {
    constructor(opt = {}) {
        Object.assign(this, {
            splitRegex: opt.splitRegex || /\b/,
            list: opt.list || en.concat(fr, sp),
            placeHolder: opt.placeHolder || '*',
            replaceRegex: opt.replaceRegex || /\w/g
        });

    }


    clean(string) {
        return string.split(this.splitRegex).map((word) => {
            return this.isProfane(word) ? this.replaceWord(word) : word;
        }).join(this.splitRegex.exec(string)[0]);
    }

    doesContainBadwords(string, regex) {
        if (!regex) regex = this.splitRegex;
        const words = string.split(regex);
        const result = {
            containBadword: false,
            badwords: [],
        }
        for (const word of words) {
            if (this.isProfane(word)) {
                result.containBadword = true;
                result.badwords.push(word);
            }
        };
        return result;
    }

    replaceWord(string) {
        return string.replace(this.replaceRegex, this.placeHolder);
    }

    isProfane(string) {
        return this.list.includes(string.toLowerCase());
    }


}
module.exports = Filter;