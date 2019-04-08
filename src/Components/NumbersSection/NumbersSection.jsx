import React, {Component} from 'react';
import './NumbersSection.scss';

class NumbersSection extends Component {
  render() {
    return (
      <section className={this.props.className}>
        <div>
          <div>{this.props.bags}</div>
          <div>oddanych worków</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eaque perferendis necessitatibus labore est maiores beatae minima ducimus, quos magni, placeat iusto debitis optio, maxime sunt dolore fugiat corporis odit.</div>
        </div>
        <div>
          <div>{this.props.orgs}</div>
          <div>wspartych organizacji</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, perspiciatis! Rerum numquam expedita at reprehenderit. Sapiente nam dignissimos quas perferendis repudiandae, suscipit, nihil aspernatur iste perspiciatis impedit, sunt quis eligendi.</div>
        </div>
        <div>
          <div>{this.props.rallies}</div>
          <div>zorganizowanych zbiórek</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi itaque dolor natus laboriosam voluptate aspernatur tempora, numquam accusamus. Repudiandae placeat aliquam temporibus, soluta omnis dolores molestiae qui iste, ipsam adipisci!</div>
        </div>
      </section>
    );
  }
}

export default NumbersSection;
