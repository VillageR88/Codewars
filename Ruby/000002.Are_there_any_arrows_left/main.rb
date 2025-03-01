require 'rspec'

def any_arrows(arrows)
 return arrows.any?{|item| !item['damaged']}
end

describe "Basic tests" do
  it "Basic test cases" do
    expect(any_arrows([])).to eq false
    expect(any_arrows([{'range'=> 5, 'damaged'=> false}])).to eq true
    expect(any_arrows([{'range'=> 5, 'damaged'=> false},{'range'=> 15, 'damaged'=> true}])).to eq true
    expect(any_arrows([{'range'=> 5}, {'range'=> 10, 'damaged'=> true}, {'damaged'=> true}])).to eq true
    expect(any_arrows([{'range'=> 10, 'damaged'=> true}, {'damaged'=> true}])).to eq false
  end
end

RSpec::Core::Runner.run([$__FILE__])
