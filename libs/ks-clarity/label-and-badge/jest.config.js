module.exports = {
  name: 'ks-clarity-label-and-badge',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ks-clarity/label-and-badge',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
