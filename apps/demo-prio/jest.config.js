module.exports = {
  name: 'demo-prio',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo-prio',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
