module.exports = {
  name: 'ks-clarity-util-inventory',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ks-clarity/util-inventory',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
