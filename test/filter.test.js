const Filter = require('../package/index');

test('String clean test', () => {
    const filter = new Filter();
    expect(filter.clean('asshole')).toBe('*******');
    expect(filter.clean('Kawacrepe is cool')).toBe('Kawacrepe is cool');
});

test('Custom list', () => {
    const filter = new Filter({list: ['test', 'github']});
    expect(filter.clean('Github is really helpfull, asshole')).toBe('****** is really helpfull, asshole');
})

test('Contain badwords', () => {
    const filter = new Filter();
    expect(filter.doesContainBadwords('asshole is a badword')).toEqual({containBadword: true, badwords: ['asshole']});
    expect(filter.doesContainBadwords('asshole is a badword and ass too')).toEqual({containBadword: true, badwords: ['asshole', 'ass']});
})

test('Placeholder changed', () => {
    const filter = new Filter({placeHolder: 'x'});
    expect(filter.clean('asshole')).toBe('xxxxxxx');
})

test('Custom list + different placeholder', () => {
    const filter = new Filter({placeHolder: 'x', list: ['test', 'github']});
    expect(filter.clean('Github is really helpfull, asshole')).toBe('xxxxxx is really helpfull, asshole');
});

test('korean badwords', () => {
    const re1 = new RegExp('[^ㄱ-ㅎㅏ-ㅣ가-힣]')
    const re2 = new RegExp(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g)
    const filter = new Filter({ splitRegex: re1, replaceRegex: re2});
    
    expect(filter.clean('ㅅㅂ')).toBe('**');
    expect(filter.clean('ㅅㅂ 시발')).toBe('** **');
    expect(filter.clean('간나 안녕 시발 알았어 강아지')).toBe('** 안녕 ** 알았어 ***');
    

});